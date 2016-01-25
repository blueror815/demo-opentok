var session = OT.initSession("2_MX40NTQ3MjU1Mn5-MTQ1MzY5NzEzMjIwNH5sNFpaVjlLVEM5Q1pSSGhZRWhaeXREVmJ-QX4"),
    publisher = OT.initPublisher("publisher");

console.log("session -------");
console.log(session);

session.connect(apiKey, token, function(err, info) {
  if(err) {
    alert(err.message || err);
  } else {
  	session.publish(publisher);
  	console.log("stream published---------------");
	
  }
  
});

session.on("connectionCreated", function(event) {
	console.log("connection created");
})
session.on('streamCreated', function(event) {
	console.log("stream created---------------");
  session.subscribe(event.stream, "subscriber", { insertMode : "append" });
});
