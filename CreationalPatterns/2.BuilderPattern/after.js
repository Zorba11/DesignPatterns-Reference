// ****Traditional way*****
// class Address {
//   constructor(zip, street) {
//     this.zip = zip
//     this.street = street
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name)
//   }

//   setAge(age) {
//     this.user.age = age
//     return this
//   }

//   setPhone(phone) {
//     this.user.phone = phone
//     return this
//   }

//   setAddress(address) {
//     this.user.address = address
//     return this
//   }

//   build() {
//     return this.user
//   }

// }

// let user = new UserBuilder('Bob').setAge(10).setPhone('1111').build()

// console.log(user);

// *****ModernWay***** 

class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, {age, phone = '123345', address} = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User('Bob', {age: 10})
console.log(user)

let user1 = new User('Bob1', {age: 11, phone: '1111', address: new Address('2', 'whalley crescent')})
console.log(user1);