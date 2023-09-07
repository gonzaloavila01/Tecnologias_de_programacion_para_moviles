
import { EthereumLogo, BinanceLogo, BitcoinLogo, DogueLogo } from "./assets"
import { THEME } from "./theme/colors"

export const CURRENCYS = [
    {id:0, name:'Ethereum', conversion:'29.75% ($28,015)', value:'79.006 ETH', dollars:'$100,000.00', img:EthereumLogo, color:THEME.COLORS.ORANGE1.DARK},
    {id:1, name:'Binance', conversion:'15.96% ($28,015)', value:'107.70 BNB', dollars:'$30,000.92', img:BinanceLogo, color:THEME.COLORS.YELLOW.STRONG},
    {id:2, name:'Bitcoin', conversion:'29.75% ($28,015)', value:'79.006 BIT', dollars:'$100,000.00', img:BitcoinLogo, color:THEME.COLORS.GREEN},
    {id:3, name:'Doguecoin', conversion:'29.75% ($28,015)', value:'79.006 BIT', dollars:'$100,000.00', img:DogueLogo, color:THEME.COLORS.YELLOW.LIGHT},
]