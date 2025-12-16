function Member(username) {
  if(!new.target) {
      throw new Error("You must use 'new' to create a Member instance.");
    }
    this.name = username;
    this.admin = false;
    console.log(this);
};

let user1 = new Member("Wally");