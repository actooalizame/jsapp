Accounts.onCreateUser(function(options, user) {
	user.active = false;
	user.onCall = false;
  if (options.profile)
    user.profile = options.profile;
  return user;
});