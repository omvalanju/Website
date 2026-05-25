import { generateTerminalResume } from "../src/data/portfolioData";

export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent") || "";
  const isCli = /curl|wget|httpie|fetch/i.test(userAgent);

  // Check if the hostname is resume.omvalanju.in or if the path is explicitly /resume
  const isResumeHost = url.hostname === "resume.omvalanju.in";
  const isResumePath = url.pathname === "/resume" || url.pathname === "/resume/" || url.pathname === "/resume/text";

  if (isResumeHost || isResumePath) {
    // If it's a CLI tool or explicitly requesting text format, serve the plain-text resume
    if (isCli || url.pathname === "/resume/text") {
      const textResume = generateTerminalResume();
      return new Response(textResume, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=3600",
          "access-control-allow-origin": "*"
        }
      });
    } else {
      // If it's a web browser, redirect to the main website
      return Response.redirect("https://omvalanju.in", 302);
    }
  }

  // Continue to serve static assets (React app)
  return next();
};
