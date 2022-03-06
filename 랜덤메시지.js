else if (msg.content === 'test') {
    const randommsg = ["안녕하세요","안녕","하이","바이"]
    const random = Math.floor(Math.random() * randommsg.length)
        msg.reply({content : `${randommsg[random]}`})
  }