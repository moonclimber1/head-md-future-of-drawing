#define BUTTON_PIN 8
#define LED_PIN 13
#define POT_PIN A0

void setup() {

  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);

  

}

void loop() {
  // put your main code here, to run repeatedly:
  boolean buttonState = digitalRead(BUTTON_PIN);
  // Serial.print(buttonState);
  // Serial.println(","); 
  // Serial.println(buttonState);

  int value = analogRead(POT_PIN);
  float lum = 1 - (value / 1023.0);
  dim(lum);
  // dim(0.5);
  // delay(200);
}

void dim(float luminosity) {
  Serial.println(luminosity);
  float msOn = luminosity * 16.0;
  // Serial.println(msOn);
  digitalWrite(LED_PIN, HIGH);
  delay(msOn);
  digitalWrite(LED_PIN, LOW);
  delay(16-msOn);

}
