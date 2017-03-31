var vm=new Vue({
    el:"#index_page",
    data:{
        banner:[],
        loanTotalmoney:0,
        rebateInfo:{},
        loadSuc:true,
        diswarp_redpacket:false,
    },
    beforeCreate:function(){
        console.log(1);
    },
    created:function(){
        console.log(2);
    },
    mounted:function(){
        this.$nextTick(function(){
            this.loadData();
        })
    },
    updated:function(){
        this.$nextTick(function(){
            touchimg({elem:'focus',loopTime:5000});
            this.loadSuc=false;
        })
    },
    filters:{
        formatPhone:function(val){
            return val.slice(0,3)+"****"+val.slice(-4);
        }
    },
    computed:{
        loanTotalmoneyF:function(){
            var num=parseInt(this.loanTotalmoney);
            var stri=num.toString();
            var result="";
            while(stri.length>3){
                result=","+stri.slice(-3)+result;
                stri=stri.slice(0,stri.length-3);
            }
            if(stri){stri+=result};
            return stri;
        },
    },
    methods:{
        loadData:function(){
            var _this=this;
            this.$http.get('../json/config.json').then(function(res){
                _this.banner=res.body.banner;
                _this.loanTotalmoney=res.body.loanTotal;
                _this.rebateInfo=res.body.successInfo;
            })
        },
    }
})