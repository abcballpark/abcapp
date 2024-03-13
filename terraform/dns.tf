resource "aws_route53_zone" "abcballpark_org" {
  name = "abcballpark.org"
}

resource "aws_route53_record" "abcballpark_org_A" {
  zone_id = aws_route53_zone.abcballpark_org.zone_id
  name    = "abcballpark.org"
  type    = "A"
  ttl     = "300"
  records = ["76.76.21.21"]
}

resource "aws_route53_record" "abcballpark_org_CNAME" {
  zone_id = aws_route53_zone.abcballpark_org.zone_id
  name    = "www.abcballpark.org"
  type    = "CNAME"
  ttl     = "300"
  records = ["cname.vercel-dns.com."]
}
