# frozen_string_literal: true

manager_email = 'manager@golden.io'
manager = Manager.create_with(
  password: manager_email
).find_or_create_by(email: manager_email)

user_email = 'user@golden.io'
user = User.create_with(
  password: user_email
).find_or_create_by(email: user_email)
