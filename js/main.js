/* =========================================== */
/* =========================================== */
function validate() {

  // username: thanhngan123
  // password: ngan12345
    var username = document.getElementById("username").value;
    var password = document.getElementById("password-field").value;
    var phanquyen = document.getElementById("phan-quyen").value;

    const dataLogin = {
      username: username,
      password: password,
      chucvu: phanquyen
    };

    console.log(JSON.stringify(dataLogin))

    fetch('http://localhost:3000/formdangnhap/dangnhap', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(dataLogin)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.logIn === 1) {
          
          swal({
            title: "",
            text: `Xin chào ${data.dataUser[0].TENNV}`,
            icon: "success",
            close: true,
            button: false,
          });
          
          localStorage.setItem("TENNV", data.dataUser[0].TENNV);
        
          window.location = "doc/index.html";
          return true;
        } else if (data.logIn === 2) {
          // Khúc này bắt lỗi nha cu lỗi nha cu
          
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
          return false;
        } else if (data.logIn === 3) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
          return false;
        } else if (data.logIn === 4) {
          // Khúc này bắt lỗi nha cu lỗi nha cu
          
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
          return false;
        } else if (data.logIn === 4) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else if (data.logIn === 5) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else if (data.logIn === 6) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else if (data.logIn === 7) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else if (data.logIn === 8) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else if (data.logIn === 9) {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        } else {
          swal({
            title: "",
            text: `${data.message}`,
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        }
        
      })
      .catch(error => {
        console.error('Error:', error);
      });

   
    //Đặt 1 Admin ảo để đăng nhập quản trị
    // if (username == "admin" && password == "123456") {
    //     swal({
    //         title: "",
    //         text: "Xin chào Võ Trường",
    //         icon: "success",
    //         close: true,
    //         button: false,
    //       });
    //     window.location = "doc/index.html";
    //     return true;
       
    // }
    // //Nếu không nhập gì mà nhấn đăng nhập thì sẽ báo lỗi
    // if (username == "" && password == "") {
    //     swal({
    //         title: "",
    //         text: "Bạn chưa điền đầy đủ thông tin đăng nhập...",
    //         icon: "error",
    //         close: true,
    //         button: "Thử lại",
    //       });
         
    //     return false;
       
    // }
    // //Nếu không nhập mật khẩu mà đúng tài khoản 
    // if (username == "admin" && password == "") {
    //     swal({
    //         title: "",
    //         text: "Bạn chưa nhập mật khẩu...",
    //         icon: "warning",
    //         close: true,
    //         button: "Thử lại",
    //       });
    //     return false;
    // }
    // //Nếu không nhập tài khoản sẽ báo lỗi
    // if (username == null || username == "") {
    //     swal({
    //         title: "",
    //         text: "Tài khoản đang để trống...",
    //         icon: "warning",
    //         close: true,
    //         button: "Thử lại",
    //       });
    //     return false;
    // }
    // //Nếu không nhập mật khẩu sẽ báo lỗi
    // if (password == null || password == "") {
    //     swal({
    //         title: "",
    //         text: "Mật khẩu đang để trống...",
    //         icon: "warning",
    //         close: true,
    //         button: "Thử lại",
    //       });
    //     return false;
    // }
    // //Nếu trống toàn bộ thì báo lỗi
    // else {
    //     swal({
    //         title: "",
    //         text: "Sai thông tin đăng nhập hãy kiểm tra lại...",
    //         icon: "error",
    //         close: true,
    //         button: "Thử lại",
    //       });
    //     return true;
    // };

// /*  PHẦN NỘI DUNG KHÔI PHỤC MẬT KHẨU   */

// /* =========================================== */
// /* =========================================== */
// //  function validate() {
// //      var email = document.getElementById("email").value;
// //     if (email == null || email == "") {
// //        swal("Bạn Chưa Nhập Email", "Vui Lòng Kiểm Tra", "warning");
// //        return false;
// //    }
// //}
// function RegexEmail(emailInputBox) {
//     var emailStr = document.getElementById(emailInputBox).value;
//     var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     var isvalid = emailRegexStr.test(emailStr);
//     if (!isvalid) {
//         swal({
//             title: "",
//             text: "Bạn vui lòng nhập đúng định dạng email...",
//             icon: "error",
//             close: true,
//             button: "Thử lại",
//           });
        
//         emailInputBox.focus;
//     } else {
//         swal({
//             title: "",
//             text: "Chúng tôi vừa gửi cho bạn email hướng dẫn đặt lại mật khẩu vào địa chỉ cho bạn",
//             icon: "success",
//             close: true,
//             button: "Đóng",
//           });
//         emailInputBox.focus;
//         window.location = "#";

//     }
}
