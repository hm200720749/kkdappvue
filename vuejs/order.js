var vm=new Vue({
    el:"#order",
    data:{
        list:[],
        borList:[],
        selectTapFir:'evaluate',
        selectTapSec:'eva_all',
    },
    beforeCreate:function(){
    },
    created:function(){
    },
    mounted:function(){
        this.$nextTick(function(){
            this.loadData();
        })
    },
    updated:function(){
        this.$nextTick(function(){

        })
    },
    filters:{
    },
    computed:{
        tempWait:function(){
            var arr_wait=[];
            this.list.forEach(function(val,index){
                if(val.status=='wait'){
                    arr_wait.push(val);
                }
            });
            return arr_wait;
        },
        tempSuc:function(){
            var arr_suc=[];
            this.list.forEach(function(val,index){
                if(val.status=='success'){
                    arr_suc.push(val);
                }
            });
            return arr_suc;
        },
        tempFail:function(){
            var arr_fail=[];
            this.list.forEach(function(val,index){
                if(val.status=='fail'){
                    arr_fail.push(val);
                }
            });
            return arr_fail;
        },
        tempBorWait:function(){
            var arr_wait=[];
            this.borList.forEach(function(val,index){
                if(val.status=='wait'){
                    arr_wait.push(val);
                }
            });
            return arr_wait;
        },
        tempBorSuc:function(){
            var arr_suc=[];
            this.borList.forEach(function(val,index){
                if(val.status=='success'){
                    arr_suc.push(val);
                }
            });
            return arr_suc;
        },
        tempBorFail:function(){
            var arr_fail=[];
            this.borList.forEach(function(val,index){
                if(val.status=='fail'){
                    arr_fail.push(val);
                }
            });
            return arr_fail;
        },
    },
    methods:{
        loadData:function(){
            var _this=this;
            this.$http.get('../json/order.json').then(function(res){
                _this.list=res.body.list;
            });
            this.$http.get('../json/borrowOrder.json').then(function(res){
                _this.borList=res.body.list;
            })
        },
        changeTap:function(val){
            if(val=='evaluate'){
                if(this.selectTapFir=='evaluate'){
                    return;
                }else{
                    this.selectTapFir=val;
                    this.selectTapSec='eva_all';
                }
            }else if(val=='borrow'){
                if(this.selectTapFir=='borrow'){
                    return;
                }else{
                    this.selectTapFir=val;
                    this.selectTapSec='bor_all';
                }
            }else{
                if(val=='eva_all'||val=='eva_wait'||val=='eva_suc'||val=='eva_fail'){
                    this.selectTapFir='evaluate';
                }else{
                    this.selectTapFir='borrow';
                }
                this.selectTapSec=val;
            }
        }
    }
})