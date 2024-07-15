/* eslint-disable react/react-in-jsx-scope */
import "./App.css";

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  sanitizeString(str) {
    return str.match(/\w/g).join("").toLowerCase();
  }
  isPalindrome(s) {
    if (!s) {
      return true;
    }

    const sanitizedString = this.sanitizeString(s);
    for (
      let start = 0, end = sanitizedString.length - 1;
      start > end;
      start++, end--
    ) {
      console.log("sanitizedString[start]", sanitizedString[start]);
      console.log("sanitizedString[end]", sanitizedString[end]);

      if (sanitizedString[start] !== sanitizedString[end]) {
        return false;
      }
    }
    return true;
  }
}
new Solution().isPalindrome("abc");
