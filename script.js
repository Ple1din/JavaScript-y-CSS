function cambiar(power) {
  const personaje = document.getElementById("personaje");
  const body = document.body;

  switch (power) {
    case 'sword':
      personaje.src = "src/masterchief_sword.png";
      personaje.style.width = "400px";
      body.style.backgroundImage = "url('src/halo_sword_bg.jpg')";
      break;
    case 'hammer':
      personaje.src = "src/masterchief_hammer.png";
      personaje.style.width = "400px";
      body.style.backgroundImage = "url('src/halo_hammer_bg.jpg')";
      break;
    case 'shield':
      personaje.src = "src/masterchief_shield.png";
      personaje.style.width = "50px";
      body.style.backgroundImage = "url('src/halo_shield_bg.jpg')";
      break;
    case 'camo':
      personaje.src = "src/masterchief_camo.png";
      personaje.style.width = "400px";
      body.style.backgroundImage = "url('src/halo_camo_bg.jpg')";
      break;
  }
}