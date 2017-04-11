var vm=new Vue({
    el:"#index_page",
    data:{
        banner:[],
        loanTotalmoney:0,
        rebateInfo:{},
        loadSuc:true,
        diswarp_redpacket:false,
        documentWidth:document.body.clientWidth,
    },
    beforeCreate:function(){
    },
    created:function(){
    },
    mounted:function(){
        this.$nextTick(function(){
            this.loadData();
            var that=this;
            window.onresize=function(){
                that.documentWidth=document.body.clientWidth;
            }
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
    watch:{
        documentWidth:function(val){
            setTimeout(touchimg({elem:'focus',loopTime:5000}),500);
        }
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