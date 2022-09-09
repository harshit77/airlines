# frozen_string_literal: true

class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  MAX_EMAIL_LENGTH = 255
  MIN_PASSWORD_LENGTH = 6
  has_secure_password
  validates :email, length: { maximum: MAX_EMAIL_LENGTH }, presence: true, uniqueness: { case_sensitive: false },
    format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: MIN_PASSWORD_LENGTH }, if: -> { password.present? }
  validates :password_confirmation, presence: true, on: :create
  before_create :to_lowercase
  has_secure_token :authentication_token

  private

    def to_lowercase
      email.downcase!
    end
end
