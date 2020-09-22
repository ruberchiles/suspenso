//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
        message = new Paho.MQTT.Message("L1On");
        message.destinationName = "ruberchiles@hotmail.es/test1";
        client.send(message);
}
function LED1_Off() {
        message = new Paho.MQTT.Message("L1Off");
        message.destinationName = "ruberchiles@hotmail.es/test1";
        client.send(message);
}
function LED2_On() {
        message = new Paho.MQTT.Message("L2On");
        message.destinationName = "ruberchiles@hotmail.es/test1";
        client.send(message);
}
function LED2_Off() {
        message = new Paho.MQTT.Message("L2Off");
        message.destinationName = "ruberchiles@hotmail.es/test1";
        client.send(message);
}
// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
   useSSL: false,
    userName: "ruberchiles@hotmail.es",
    password: "Campeones1",
    onSuccess:onConnect,
   
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {    
    console.log("Conectado...");	
    client.subscribe("ruberchiles@hotmail.es/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "ruberchiles@hotmail.es/test1";
    client.send(message);
  }
   
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message1) {
    console.log("Mensaje:"+message1.payloadString);
    document.getElementById("sensor").innerHTML=message1.payloadString.split("=")[1];
    document.getElementById("sensor1").innerHTML=message1.payloadString.split("=")[2];
    
  }
  
  
