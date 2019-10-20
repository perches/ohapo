# frozen_string_literal: true

require "jwt"

class JsonWebToken
  REGION = ENV["REGION"]
  USER_POOL_ID = ENV["USER_POOL_ID"]

  def self.openssl_bn(n)
    n = n + "=" * (4 - n.size % 4) if n.size % 4 != 0
    decoded = Base64.urlsafe_decode64 n
    unpacked = decoded.unpack("H*").first
    OpenSSL::BN.new unpacked, 16
  end

  def self.fetch(jwk, header)
    modulus = openssl_bn(jwk["n"])
    exponent = openssl_bn(jwk["e"])
    sequence = OpenSSL::ASN1::Sequence.new(
      [OpenSSL::ASN1::Integer.new(modulus),
      OpenSSL::ASN1::Integer.new(exponent)]
    )
    public_key = OpenSSL::PKey::RSA.new(sequence.to_der)

    # デコードされた JWT トークンの署名を確認
    JWT.decode header, public_key, true, algorithm: "RS256"
  end

  # kidに一致するJWKを返却する
  def self.getJwk(kid)
    # TODO: リクエストの度にjwksを取得するのはイけてないので追々見直し
    uri = URI.parse("https://cognito-idp.#{REGION}.amazonaws.com/#{USER_POOL_ID}/.well-known/jwks.json")
    json = Net::HTTP.get(uri)
    jwks = JSON.parse(json)

    # 公開鍵を生成
    # jwks["keys"]は jwks["keys"][{配列番号}]["kid"]でkidが一致するものを使う
    jwk = jwks["keys"].select { |item| item["kid"] === kid }
    jwk[0]
  end
end
