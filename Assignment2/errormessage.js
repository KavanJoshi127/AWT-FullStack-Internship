function checkData() {
    if (document.email.TITLE.value == "0") {
      alert("please select the title");
      document.email.TITLE.focus();
      return false;
    }
  
    if (document.email.NAME.value == "") {
      alert("please fill in the NAME");
      document.email.NAME.focus();
      return false;
    }
  
    if (document.email.NAME.value.length < 2) {
      alert("name must be greater than 2 characters");
      document.email.NAME.focus();
      return false;
    }
    if (document.email.gender.value == "") {
      alert("please fill in the gender");
      document.email.gender.focus();
      return false;
    }
    if (document.email.area.value == "") {
      alert("please fill in the area");
      document.email.area.focus();
      return false;
    } else {
      /*return true if all above is correct*/
      return true;
    }
  }