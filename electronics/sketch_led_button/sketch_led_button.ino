#define BUTTON_PIN 8
#define LED_PIN 13

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);

  digitalWrite(LED_PIN, LOW);
}

void loop() {
  boolean value = digitalRead(BUTTON_PIN);
  digitalWrite(LED_PIN, !value);
  // digitalWrite(LED_PIN, HIGH);
  // delay(1000);
  // digitalWrite(LED_PIN, LOW);
  // delay(1000);
}
