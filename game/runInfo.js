export default class RunInfo{
    //0->nada 1->muerto 2->salvado
    _monecos = [2,1,0]
    finishCombate(save,moneco){this._monecos[moneco]=save;}
}