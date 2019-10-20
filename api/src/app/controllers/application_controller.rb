# frozen_string_literal: true

require "jwt"

class ApplicationController < ActionController::API
  def not_found
    render json: { error: "not_found" }
  end

  def authorize_request
    region = ENV["REGION"]
    userPoolId = ENV["USER_POOL_ID"]
    header = request.headers["Authorization"]
    header = header.split(" ").last if header
    begin
      # JWT 形式からトークン文字列をデコード
      decode = JWT.decode header, nil, false

      # JWT トークンヘッダーから kid を取得
      kid = decode[1]["kid"]

      # iss クレームを確認
      return render json: { error: "invalid auth" } if decode[0]["iss"] != "https://cognito-idp.#{region}.amazonaws.com/#{userPoolId}"

      # token_use クレームを確認
      return render json: { error: "invalid auth" } if decode[0]["token_use"] != "id"

      # ユーザープールの JSON Web トークン (JWT) セットをダウンロードして保存
      jwk = JsonWebToken.getJwk(kid)
      return render json: { error: "user not_found" } if jwk.empty?

      # Cognitoから取得したjwkとフロントから受け取るユーザ情報を比較する
      JsonWebToken.fetch(jwk, header)

    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
