import { ApiHelper } from "./serverConnections";

export {
	ForgetPasswordRequest,
	LoginRequest,
	LogoutRequest,
	GetProfileInfoRequest,
	NewActivationRequest,
	RefreshToken,
	SendImageRequest,
	SetProfilePictureRequest,
	SignupRequest,
	UpdateProfileInfoRequest,
} from "./requests";

console.log("API_URL : ", process.env.REACT_APP_API_URL);
const api = new ApiHelper({
	baseURL: process.env.PUBLIC_URL,
	timeout: 3000,
});

export default api;
