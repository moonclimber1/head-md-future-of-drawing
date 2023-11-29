#include <IRremote.h>

#define IR_RECEIVE_PIN 5
#define PIEZO 10
#define LED_PIN 13

int command;

void setup() {
  Serial.begin(74880);
  IrReceiver.begin(IR_RECEIVE_PIN);
  pinMode(PIEZO, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
}
void loop() {
  if (IrReceiver.decode()) {
    IrReceiver.resume();
    command = IrReceiver.decodedIRData.command;

    
    Serial.println(command);
    if(command == 69){
      digitalWrite(LED_PIN, HIGH);
      Serial.println("before tone");
      // tone(PIEZO, 500);
      Serial.println("after tone");
    }
    if (command == 71) {
      digitalWrite(LED_PIN, LOW);
      // noTone(PIEZO);
    }

  }
}

void playTone(){
  digitalWrite(LED_PIN, HIGH);
  delay(10);
  digitalWrite(LED_PIN, LOW);
  delay(10);
}