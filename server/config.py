import redis
class Appconfig:


	SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'
	SQLALCHEMY_TRACK_MODIFICATIONS = False
	# SQLALCHEMY_ECHO = True

	#sessions
	SESSION_TYPE = 'redis'
	SESSION_REDIS = redis.from_url('redis://127.0.0.1:6379')
	SESION_PERMANENT = False
	SESSION_USE_SIGNER = True
	# SESSION_COOKIE_SAMESITE = "Strict"
	# SESSION_COOKIE_SECURE = True

	SESSION_COOKIE_SECURE=True
	SESSION_COOKIE_HTTPONLY=True
	SESSION_COOKIE_SAMESITE="Strict"
	# SESSION_COOKIE_NAME = "__Secure"


