import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

function formatPhoneNumber(phoneNumber: string) {
  let formattedNumber = phoneNumber.replace(/\D/g, "");

  if (!formattedNumber.startsWith("88")) {
    formattedNumber = "88" + formattedNumber;
  }

  return formattedNumber;
}

function detectCarrier(number: string) {
  const prefixes: Record<string, string> = {
    "017": "Grameenphone",
    "013": "Grameenphone",

    "018": "Robi",
    "016": "Airtel",

    "019": "Banglalink",
    "014": "Banglalink",

    "015": "Teletalk",
  };

  // remove 88
  const local = number.replace(/^88/, "");

  const prefix = local.slice(0, 3);

  return prefixes[prefix] || "Unknown";
}

export async function GET(req: NextRequest) {


  const result = await auth.api.getSession({
    headers: req.headers,
  });

  if (!result?.session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }


  const start = performance.now();

  const number = req.nextUrl.searchParams.get("number");

  if (!number) {
    return NextResponse.json(
      { error: "Number parameter is missing." },
      { status: 400 }
    );
  }

  const cli = formatPhoneNumber(number);

  try {
    const url = `https://api.eyecon-app.com/app/getnames.jsp?cli=${cli}&lang=en&is_callerid=true&is_ic=false&cv=vc_502_vn_4.0.502_a&requestApi=URLconnection&source=RegistrationGetMyName`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
        Connection: "Keep-Alive",
        Accept: "application/json",
        "e-auth-v": "e1",
        "e-auth": "e6909da8-e12d-49c4-8e97-c2be4092edf9",
        "e-auth-c": "52",
        "e-auth-k": "PgdtSBeR0MumR7fO",
        "accept-charset": "UTF-8",
      },
      cache: "no-store",
    });

    const text = await response.text();

    const end = performance.now();
    const responseTime = ((end - start) / 1000).toFixed(2);

    const nameMatch = text.match(/"name":"(.*?)"/);
    const typeMatch = text.match(/"type":"(.*?)"/);

    const carrier = detectCarrier(cli);

    if (nameMatch && typeMatch) {
      return NextResponse.json({
        status: true,
        responseTime: `${responseTime}s`,
        name: nameMatch[1],
        type: typeMatch[1],
        number: cli,
        carrier,
        location: "Bangladesh",
        image: "",
      });
    }

    return NextResponse.json({
      status: false,
      message: "Not available for this number!",
      number: cli,
      carrier,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}