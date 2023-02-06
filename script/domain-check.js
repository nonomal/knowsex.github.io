
const domains = ["knowsex.net", "knowsex.vercel.app", "knowsex.on.fleek.co"];
const domainCheckHostname = window.location.hostname;
var domainCheckValid = false;
domains.forEach(function(domain) {
    if (domainCheckHostname === domain || domainCheckHostname.endsWith("." + domain)) {
        domainCheckValid = true;
    }
});
if (!domainCheckValid) {
    document.getElementById("domain-notice").innerHTML = `<p class="bg-light tip-bar">ℹ️ 您正在访问非官方提供的镜像网站。所提供的内容可能已经陈旧，最新页面请访问 <a href="https://knowsex.net/">knowsex.net</a>。</p>`;
}
