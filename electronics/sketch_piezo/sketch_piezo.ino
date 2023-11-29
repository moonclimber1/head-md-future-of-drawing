#define PIEZO 10

void setup() {
  pinMode(PIEZO, OUTPUT);
}

void loop() {
  tone(PIEZO, 2000, 1000);
  delay(2000);
}
