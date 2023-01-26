
const domains = ["knowsex.net"];
const domainCheckHostname = window.location.hostname;
var domainCheckValid = false;
domains.forEach(function(domain) {
    if (domainCheckHostname === domain || domainCheckHostname.endsWith("." + domain)) {
        domainCheckValid = true;
    }
});
if (!domainCheckValid) {
    document.getElementById("domain-notice").innerHTML = "ℹ️ 您正在访问非官方提供的镜像网站。";
}
