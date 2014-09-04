
#include <Command.h>
#include <DeviceConnection.h>
#include <DeviceManager.h>
#include <OpenDevice.h>

#include <UIPEthernet.h>
#include <ConnectionENC28J60.h>


// ========================================================================
// Variables
// ========================================================================

DeviceConnection deviceConnection (Serial);

DeviceManager deviceManager;


bool DEBUG_USB = true;


//The setup function is called once at startup of the sketch
void setup(){
  
       Serial.begin(9600);
       while (!Serial){delay(1);} // wait to open
       
       if(DEBUG_USB) OpenDevice::debug(F("Starting..."));

       deviceManager.addDevice(13, Device::DIGITAL); // ID:1
	
    // TODO: falta configurar o IP..			
    OpenDevice::begin(&deviceManager, &deviceConnection);			
    OpenDevice::debug(F("Started!"));
        
}

// The loop function is called in an endless loop
void loop(){
	
	OpenDevice::loop();

}
