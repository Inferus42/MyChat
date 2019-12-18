class Mes {
    constructor () {
      this.mes = [];
    }
  
    addMes (name, room, message) {
      var me = {name, room, message};
      this.mes.push(me);
    }

    getMesInRoom (room, name) {
        var mes = this.mes.filter((me) => me.room === room && me.name === name ); // ищем всех юзеров в определенной комнате
        var messageArray = mes.map((me) => me.message); // получаем массив имен
            
        return messageArray;
      }

      getNameInRoom (room) {
        var mes = this.mes.filter((me) => me.room === room); // ищем всех юзеров в определенной комнате
        var namesArray = mes.map((me) => me.name); // получаем массив имен
            
        return namesArray;
      }
}

module.exports = {Mes};