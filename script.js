var password
var password1
var email
var username
var flag = false
var passflag = false
var termsFlag = false

document.getElementById("password").addEventListener("input", function (e) {
  password = e.target.value
  flag = true
  checkPasswords()
  showErrorMsg(e.target.id, e.target.value)
})

document.getElementById("terms").addEventListener("click", function (e) {
  if (e.target.checked) {
    termsFlag = true
    document.getElementById("terms-label").style.color = "black"
  } else {
    termsFlag = false
  }
})

document.getElementById("con-password").addEventListener("input", function (e) {
  password1 = e.target.value
  flag = true
  checkPasswords()
  showErrorMsg(e.target.id, e.target.value)
})

document.getElementById("email").addEventListener("input", function (e) {
  email = e.target.value
  flag = true
  showErrorMsg(e.target.id, e.target.value)
})

document.getElementById("username").addEventListener("input", function (e) {
  username = e.target.value
  flag = true
  showErrorMsg(e.target.id, e.target.value)
})

const onSubmit = (e) => {
  e.preventDefault()
  if (username && email && password && password1) {
    if (flag && passflag && termsFlag) {
      console.log("sub")
      showLoading()
    } else {
      if (!termsFlag) {
        document.getElementById("terms-label").style.color = "crimson"
      } else {
        document.getElementById("terms-label").style.color = "black"
      }
      console.log("not")
    }
  } else {
    var inputs = document.querySelectorAll(".inp")
    var errInputs = []
    inputs.forEach(elem => {
      if (!elem.value) {
        showErrorMsg(elem.id, elem.value)
        flag = false
      }
    });
  }
}

document.getElementById("form1").addEventListener("submit", onSubmit)

const checkPasswords = () => {
  if (password === password1) {
    document.getElementById("msg").innerHTML = ""
    passflag = true
  } else {
    document.getElementById("msg").innerHTML = "Password and Confirm password do not match"
    passflag = false
  }
}

const showErrorMsg = (elemId, elemVal) => {
  var id = elemId + "-label"
  if (!elemVal) {
    document.getElementById(id).style.color = "crimson"
  } else {
    document.getElementById(id).style.color = "black"
  }
}

const showLoading = () => {
  fetch("./views/loading.html")
    .then(res => {
      // console.log(res.text())
      return res.text()
    })
    .then(htmlSnippet => {
      document.getElementById("loading").innerHTML = htmlSnippet
      return 0
    })
    .then(() => {
      setTimeout(() => {
        document.getElementById("loading").innerHTML = ""
        alert("Registered")
      }, 2000)
    })
}