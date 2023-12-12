
int raw1 = 0;
int raw2 = 0;

void setup(){
  Serial.begin(38400);
}

void loop(){
  raw1 = analogRead(0);
  Serial.print(raw1);
  Serial.print(",");
  raw2 = analogRead(1);
  Serial.println(raw2);
}