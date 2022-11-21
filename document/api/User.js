/**
 * @api {get} /user/auth 1.유저 인증 체크
 *
 * @apiVersion 1.0.0
 * @apiName Auth Check
 * @apiGroup User
 *
 * @apiSuccess (200) {number} id 유저 아이디
 * @apiSuccess (200) {String} email 유저 이메일
 * @apiSuccess (200) {String} nickname 유저 닉네임
 *
 * @apiError (400) UserNotFound 인증에 실패했습니다.
 * @apiError (500) ServerError 데이터베이스 또는 서버에 문제가 생겼습니다.
 */

/**
 * @api {post} /user/login 2.로그인
 *
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup User
 *
 * @apiBody {string} email
 * @apiBody {string} password
 *
 * @apiError (400) InvalidInformation email or password 가 일치하지 않습니다.
 * @apiError (500) ServerError 데이터베이스 또는 서버에 문제가 생겼습니다.
 */

/**
 * @api {post} /user/register 3.회원가입
 *
 * @apiVersion 1.0.0
 * @apiName Resister
 * @apiGroup User
 *
 * @apiBody {string} email
 * @apiBody {string} password
 * @apiBody {string} nickname
 *
 * @apiError (400) InvalidInformation email or password or nickname 유효성 검사 실패
 * @apiError (500) ServerError 데이터베이스 또는 서버에 문제가 생겼습니다.
 */

