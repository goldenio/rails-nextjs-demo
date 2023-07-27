# frozen_string_literal: true

manager_email = 'manager@golden.io'
manager = Manager.create_with(
  password: manager_email
).find_or_create_by(email: manager_email)

user_email = 'user@golden.io'
user = User.create_with(
  password: user_email
).find_or_create_by(email: user_email)

nextjs_backend = Doorkeeper::Application.find_or_create_by(
  name: 'credentials-nextjs_backend',
  confidential: true,
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
)
puts "\nPlease setup the Nextjs backend infomations into ENV Variables"
puts 'Application: '
puts "\tname: #{nextjs_backend.name}"
puts "\tBACKEND_CREDENTIAL_ID=#{nextjs_backend.uid}"
puts "\tBACKEND_CREDENTIAL_SECRET=#{nextjs_backend.secret}"

nextjs_frontend = Doorkeeper::Application.find_or_create_by(
  name: 'credentials-nextjs_frontend',
  confidential: true,
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob:auto'
)
puts "\nPlease setup the Nextjs frontend infomations into ENV Variables"
puts 'Application: '
puts "\tname: #{nextjs_frontend.name}"
puts "\tFRONTEND_CREDENTIAL_ID=#{nextjs_frontend.uid}"
puts "\tFRONTEND_CREDENTIAL_SECRET=#{nextjs_frontend.secret}"
