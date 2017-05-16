describe('app test runner',function () {
    
    describe('Declarar una variable con el nombre `persona` del tipo object',function () {
        it('Debe ser un objeto',function () {
            var tipo = typeof persona;
            expect(tipo).toEqual('object')
        });
        it('Debe tener las propiedades nombre y email',function() {
          expect(persona.nombre).not.toBeUndefined();
          expect(persona.email).not.toBeUndefined();
        });
    });
    
    describe('Funcion showUserInfo',function() {
      it('Debe existir',function() {
           expect(showUserInfo).toBeDefined();
      });
      it('Debe ser una funcion',function(){
          var tipo = typeof showUserInfo;
          expect(tipo).toEqual('function')
      });
      it('Debe retornar un valor',function () {
          expect(showUserInfo()).not.toBeUndefined();
      })
    });

    describe('Funcion getUserData(login)',function() {
        beforeEach(function() {
          jasmine.Ajax.install();
        });
        afterEach(function() {
          jasmine.Ajax.uninstall();
        });

        it('Debe recibir el parametro login para buscar',function() {
          var call = getUserData('leodufer');
          request = jasmine.Ajax.requests.mostRecent(); 
          console.log(request);        
          expect(request.url).toEqual('https://api.github.com/users/leodufer');
        });
        it('Debe retornar una promise', function() {
           var call = getUserData('leodufer');
           expect(call.done).toBeDefined()
        })
    });
})