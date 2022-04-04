const chiller = (state) => ({
  chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`),
});

const caller = (state) => ({
  call: () => console.log(`I am calling ${state.number}`),
});

const browserInternet = (state) => ({
  browse: () => state.url,
});

const chillinator = (temp) => {
  let state = {
    temp,
    number: 311,
    url: "google.com",
  };
  return { ...chiller(state), ...caller(state), ...browserInternet(state) };
};

chillinator(20).chill();
chillinator(20).call();
chillinator(20).browse();
