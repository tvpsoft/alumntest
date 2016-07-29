/*
 *
 * (c) Phuong Tran <tvpsoft@live.com>
 * @AlumnTest
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


class DoubleXor {

  /**
  * Let us introduce a new operation called double xor, and use the operator ^^ to denote it.
  * For two integers A and B, A ^^ B is calculated as follows:
  * Take the decimal representations of A and B.
  * If they have different lengths, prepend the shorter one with leading zeros until they both have the same length.
  * Then, label the digits of A as a , a , 1  2 ..., a n (from left to right)
  * and the digits of B as b 1, b 2, ... , b n (from left to right).
  * C = A ^^ B will consist of the digits c1, c2, . . . , cn   ( from left to right ) , where
  * ci = (ai ^ bi)  % 10, where ^ is the usual bitwise XOR operator (see notes for exact definition) and x % y is the remainder of x divided by y.
  * If C happens to have any extra leading zeroes, they are ignored.
  *
  * When multiple ^^ operations occur in an expression, they must be evaluated from left to right. For example, A ^^ B ^^ C means (A ^^ B) ^^ C.
  *
  * @param  int  Number N
  * @return Return the value of N ^^ (N ­ 1) ^^ (N ­ 2) ^^ ... ^^ 1.
  */
  calculate (_n){

    // Check for the valid input data
    if(_n < 1 || _n > 1000000){
      return -1
    }
    var _out = _n;
    for (var i = _n; i > 1; i--) {
      _out = this.doDoubleXor(_out, i-1);
    }
    return _out;
  }


  /**
  * Calculate the DoubleXor for 2 elements A,B
  * C = A ^^ B will consist of the digits c1, c2, . . . , cn   ( from left to right ) , where
  * ci = (ai ^ bi)  % 10, where ^ is the usual bitwise XOR operator (see notes for exact definition) and x % y is the remainder of x divided by y.
  * If C happens to have any extra leading zeroes, they are ignored.
  *
  * @param  int _a  Number
  * @param  int _b  Number
  * @return int _c Return the value of N ^^ (N ­ 1) ^^ (N ­ 2) ^^ ... ^^ 1.
  */
  doDoubleXor(_a,_b){
    // Pash _a, _b to array of characters for process of each number
    _a = _a.toString();
    _b = _b.toString();

    // prepend with 0 for the one shorter
    if(_a.length > _b.length){
      let _len = _a.length - _b.length;
      for (var i = 0; i < _len; i++) {
        _b = '0' + _b;
      }
    }else if (_a.length < _b.length) {
      let _len = _a.length - _b.length;
      for (var i = 0; i < _len; i++) {
        _a = '0' + _a;
      }
    }

    // _a and _b has same length
    var _c = "";
    for (var i = 0; i < _a.length; i++) {
      // Calculate each element of _c
      _c += (_a[i] ^ _b[i]) % 10;
    }

    // Check and remove leading 0 from _c
    _c = _c.toString();
    var _lead0 = 0;
    for (var i = 0; i < _c.length; i++) {
      if(_c[i] === 0){
          _lead0++
      }
    }
    _c = _c.substring(Math.min(_lead0, _c.length - 1), _c.length);

    return _c;
  }

}
