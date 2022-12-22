const gravitational_acceleration = 9.8e-6;
const speed_of_light = 300;

function gas_particle_speed(temperature, molar_mass){
	// get root mean squared speed of gas
	// temperature: Kelvin,
	// molar_mass: kilograms per mole.
	if (temperature <= 0.0 || molar_mass <= 0.0){
		return -1.0;
	}
	return sqrt((3 * GAS_CONSTANT * temperature) / molar_mass) / 1_000_000;
}

function schwarzchild_radius(planet_mass){
	// limit radius slider. no black holes
}
function schwarzchild_mass(){}//limit planet mass slider. no black holes


function planet_mass(planet_radius, planet_density){
	return 4/3 * Math.PI * Math.pow(planet_radius, 3) * planet_density;
}

function oops_all_exosphere(planet_radius, planet_density, temperature, molar_mass){
	var gas_speed = gas_particle_speed(temperature, molar_mass);
	var escape_velocity = 2 * gravitational_acceleration * planet_mass(planet_radius, planet_density) / pow(speed_of_light, 2);
	if (gas_speed >= escape_velocity){return true;}
	else {return false;}
}