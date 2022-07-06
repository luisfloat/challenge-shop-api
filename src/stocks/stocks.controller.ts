import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateStockDto } from './dto/update-stock.dto';
import { StocksService } from './stocks.service';

@Controller('products')
export class StocksController {
    constructor(private readonly stocksService: StocksService) {}

    @Get(':id/stock')
    findOne(@Param('id') id: string) {
        return this.stocksService.findOne(+id);
    }

    @Patch(':id/stock')
    update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
        return this.stocksService.update(+id, updateStockDto);
    }

    @Delete(':id/stock')
    remove(@Param('id') id: string) {
        return this.stocksService.remove(+id);
    }
}
