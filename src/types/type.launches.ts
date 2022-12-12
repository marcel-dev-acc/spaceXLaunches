type Rocket = {
    rocket_id: string,
    rocket_name: string,
  };
  
export type Launches = {
  flight_number: number,
  mission_name: string,
  launch_date_unix: number,
  rocket: Rocket,
};