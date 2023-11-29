int ANALOG_PIN = 5;
int raw = 0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  raw = analogRead(ANALOG_PIN);
  Serial.println(raw/1024.0);
}