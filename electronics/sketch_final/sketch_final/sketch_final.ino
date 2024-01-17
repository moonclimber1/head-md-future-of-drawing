const int numChannels = 6;
int rawValues[numChannels];

void setup() {
  delay(1000);
  Serial.begin(38400);
}

void loop() {
  for (int i = 0; i < numChannels; i++) {
    rawValues[i] = analogRead(i);

    Serial.print(rawValues[i]);

    if (i < numChannels - 1) {
      Serial.print(",");
    }
  }

  Serial.println();
}