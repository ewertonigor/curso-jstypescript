// Composição
export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  parar(): void {
    this.motor.parar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Ligando o motor...');
  }

  parar(): void {
    console.log('Parando o motor');
  }

  acelerar(): void {
    console.log('Acelerando o motor...');
  }

  desligar(): void {
    console.log('Desligando o motor...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
