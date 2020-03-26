function isEmpty(str) {
    if (str.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function validate(formularz) {
    if (!checkStringAndFocus(formularz.elements["f_imie"], "Podaj imię!", checkString)) {
        return false;
    }
    else if (!checkStringAndFocus(formularz.elements["f_nazwisko"], "Podaj nazwisko!", checkString)) {
        return false;
    }
    else if (!checkStringAndFocus(formularz.elements["f_kod"], "Podaj kod!", checkString)) {
        return false;
    }
    else if (!checkStringAndFocus(formularz.elements["f_ulica"], "Podaj ulicę!", checkString)) {
        return false;
    }
    else if (!checkStringAndFocus(formularz.elements["f_miasto"], "Podaj miasto!", checkString)) {
        return false;
    }
    else if (!checkStringAndFocus(formularz.elements["f_email"], "Podaj właściwy email!", checkEmail)) {
        return false;
    }
    return true;
}

function checkString(str, message) {
    if (isWhiteSpaceOrEmpty(str)) {
        return false;
    }
    else {
        return true;
    }
}

function checkStringAndFocus(obj, msg, func) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (func == checkEmail) {
        if (!checkEmail(str)) {
            document.getElementById(errorFieldName).innerHTML = msg;
            obj.focus();
            return false;
        }
        else {
            document.getElementById(errorFieldName).innerHTML = "";
            return true;
        }
    } else if (func == checkString) {
        if (isWhiteSpaceOrEmpty(str)) {
            document.getElementById(errorFieldName).innerHTML = msg;
            obj.focus();
            return false;
        }
        else {
            document.getElementById(errorFieldName).innerHTML = "";
            return true;
        }
    }
}

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        return false;
    }
}

function isEmailInvalid(str) {
    if (checkEmail(str))
        return false;
    else
        return true;
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
   }
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
    return e;
   }
function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
        form.value = form.value.substring(0, maxSize);
    else
        msg.innerHTML = maxSize - form.value.length;
}