

int raw1 = 0;
int raw2 = 0;
int raw3 = 0;
int raw4 = 0;

void setup(){
  Serial.begin(38400);
}

void loop(){
  raw1 = analogRead(0);
  raw2 = analogRead(1);
  raw3 = analogRead(2);
  raw4 = analogRead(3);
  Serial.print(raw1);
  Serial.print(",");
  Serial.print(raw2);
  Serial.print(",");
  Serial.print(raw3);
  Serial.print(",");
  Serial.println(raw4);
}