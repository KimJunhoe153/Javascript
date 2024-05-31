const urlLogin = "http://localhost:8080/user/login";
const urlLogout = "http://localhost:8080/user/logout";
const urlSignUp = "http://localhost:8080/user/signup";

let userId = "";
let password = "";

let signupUserId = "";
let signupPassword = "";
let signupUserName = "";
let signupUserEmail = "";

document.querySelector("#userId").addEventListener("change", (e) => {
  console.log(e.target.value);
  // 확인해보면 엄청 길게 나오는데 여기서 value 값이 필요(입력한 값 나와있음)
  // → e.target.value 사용
  userId = e.target.value;
});

document.querySelector("#password").addEventListener("change", (e) => {
  console.log(e.target.value);
  password = e.target.value;
});

document.querySelector(".loginBtn").addEventListener("click", () => {
  const data = {
    userId: userId,
    password: password,
  };
  axios
    .post(urlLogin, data, { withCredentials: true }) // url 옆에 전송할 객체 넣음
    .then((response) => {
      console.log("데이터 :", response);
      sessionCurrent();
    })
    .catch((error) => {
      console.log("오류 발생 : ", error);
    });
});

document.querySelector(".logoutBtn").addEventListener("click", () => {
  if (confirm("🥺 로그아웃 하시겠습니까?")) {
    axios
      .post(urlLogout, {}, { withCredentials: true })
      .then((response) => {
        console.log("데이터: ", response);
        if (response.status == 200) {
          document.querySelector(".login-box").classList.remove("hidden");
          document.querySelector(".user-box").classList.add("hidden");
        }
      })
      .catch((error) => {
        console.log("오류 발생: ", error);
      });
  }
});

document.querySelector(".signupBtn").addEventListener("click", () => {
  const data = {
    userId: signupUserId,
    password: signupPassword,
    userName: signupUserName,
    userEmail: signupUserEmail,
  };
  if (confirm("회원가입 하시겠습니까?")) {
    axios
      .post(urlSignUp, data, { withCredentials: true })
      .then((response) => {
        console.log("데이터: ", response);
        alert("회원가입이 완료되었습니다! 🎉 로그인 해주세요 ~.~");
        window.location.reload();
      })
      .catch((error) => {
        console.log("에러 발생 : ", error);
      });
  }
});

document.querySelector(".signupBtn").addEventListener("click", () => {
  document.querySelector(".login-box").classList.add("hidden");
  document.querySelector(".signup-box").classList.remove("hidden");
});

document.querySelector("#signupUserId").addEventListener("change", (e) => {
  console.log(e.target.value);
  signupUserid = e.target.value;
});

document.querySelector("#signupPassword").addEventListener("change", (e) => {
  console.log(e.target.value);
  signupPassword = e.target.value;
});

document.querySelector("#signupUserName").addEventListener("change", (e) => {
  console.log(e.target.value);
  signupUsername = e.target.value;
});

document.querySelector("#signupUserEmail").addEventListener("change", (e) => {
  console.log(e.target.value);
  signupUseremail = e.target.value;
});

function sessionCurrent() {
  axios
    .get("http://localhost:8080/user/current", { withCredentials: true })
    .then((response) => {
      console.log("데이터: ", response);
      if (response.status == 200) {
        console.log("세션 유지");
        if (response.status == 200) {
          document.querySelector(".login-box").classList.add("hidden");
          document.querySelector(".user-box").classList.remove("hidden");
          document.querySelector(".user-box p").textContent =
            response.data.userId + "님 환영합니다.";
        }
      }
    })
    .catch((error) => {
      console.log("에러 발생: ", error);
    });
}

// js 파일이 로드될 때 호출됨
sessionCurrent();
