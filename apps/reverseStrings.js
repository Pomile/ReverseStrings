module.exports ={


  reverseString: function (string){

    var splitString = string.split("")
    var reverseArray = splitString.reverse()
    var joinReverseArray = reverseArray.join("")


    if (typeof string[0]== 'undefined'){

      return null;
    }

    else if (joinReverseArray == string){

      return true;
    }

    else if (joinReverseArray != string){

      return joinReverseArray;
    }


  }

}