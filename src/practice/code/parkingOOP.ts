import React, { useEffect, useState } from "react";

/*
נושא - מי עשה את הפעולה
נשוא - פעולה
מושא - על מי נעשת הפעולה

business requirements
create parking garage with parking spots  

user -> able to order a spot and park in the parking garage spot with start time and end time
user -> able to leave the parking spot

*/
enum CarType {
  small = 1,
  medium,
  big,
}

class User {
  firstName: any;
  lastName: any;
  id: any;
  cars: Car[];
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.cars = [];
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  getUserId() {
    return this.id;
  }
}

class Car {
  id: string;
  type: CarType;
  user: User;
  constructor(id: string, type: CarType, user: User) {
    this.id = id;
    this.type = type;
    this.user = user;
  }
}

class Order {
  constructor(
    user: User,
    price: number,
    parkingGarage: ParkingGarage,
    parking: ParkingSpot
  ) {}
}

type TimeStamp = number | null;

class ParkingSpot {
  id: any;
  type: CarType;
  startTime: TimeStamp;
  endTime: TimeStamp;
  isOccupied: boolean;
  occupiedByUser: User | null;
  occupiedByCar: Car | null;
  price: number;
  constructor(id, type: CarType) {
    this.id = id;
    this.type = type;
    this.startTime = null;
    this.endTime = null;
    this.isOccupied = false;
    this.occupiedByUser = null;
    this.occupiedByCar = null;
    this.price = this.calcSpotPrice(type);
  }

  private calcSpotPrice(type: CarType) {
    if (type === CarType.small) {
      return 10;
    }
    return 50;
  }

  park(car: Car, startTime: TimeStamp, endTime: TimeStamp) {
    this.isOccupied = true;
    this.occupiedByUser = car.user;
    this.occupiedByCar = car;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  leave() {
    this.isOccupied = false;
    this.occupiedByUser = null;
    this.occupiedByCar = null;
    this.startTime = null;
    this.endTime = null;
  }
}

class ParkingGarage {
  parkingSpots: ParkingSpot[];
  id: any;
  address: any;
  constructor(id, address) {
    this.parkingSpots = [];
    this.id = id;
    this.address = address;
  }

  addParkingSpot(parkingSpot: ParkingSpot | ParkingSpot[]) {
    if (Array.isArray(parkingSpot)) {
      this.parkingSpots = this.parkingSpots.concat(parkingSpot);
    } else {
      this.parkingSpots.push(parkingSpot);
    }
  }

  private findSpotForCar(car: Car) {
    const freeSpot = this.parkingSpots.find((spot) => {
      if (!spot.isOccupied && spot.type === car.type) {
        return true;
      }
      return false;
    });

    return freeSpot;
  }

  parkCar(car: Car, startTime: TimeStamp, endTime: TimeStamp) {
    const freeSpot = this.findSpotForCar(car);

    if (freeSpot) {
      console.log("found spot", freeSpot);

      freeSpot.park(car, startTime, endTime);
    } else {
      console.log("no spots");
    }
    return freeSpot?.id || null;
  }

  leaveSpot(id: string) {
    const spot = this.parkingSpots.find((spot) => spot.id === id);
    if (spot?.isOccupied) {
      console.log("left spot id", id);
      spot?.leave();
    } else {
      console.log(" spot not occupied", id);
    }
  }
}

export function mainTest() {
  return;
  const user = new User("dudu", "aa", "1234");
  const car = new Car("zxc", CarType.medium, user);
  user.addCar(car);
  const parkingGarage = new ParkingGarage("my garage", "tel aviv");
  const parkingSpot = new ParkingSpot(1, CarType.medium);
  const parkingSpot2 = new ParkingSpot(2, CarType.small);

  parkingGarage.addParkingSpot([parkingSpot, parkingSpot2]);

  const spotId = parkingGarage.parkCar(car, Date.now(), Date.now() + 50);
  const spotId2 = parkingGarage.parkCar(car, Date.now(), Date.now() + 50);
  parkingGarage.leaveSpot(spotId);
  parkingGarage.leaveSpot(spotId);
}
