<!DOCTYPE html>
<html>
    <head>
        <title>jQuery custom select Pluggin</title>
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <link rel="stylesheet" href="css/jquery.ak.select.css" />
        <script src="js/jquery.ak.select.js"></script>
        <script type="text/javascript">
        $(function(){
            $('#miSelect').akselect();
            $('.selects-varios').akselect();
        });
        </script>
    </head>
    <body>
        <select id="miSelect">
            <?php for($i=0; $i<20; $i++){ ?>
            <option value="<?php echo $i; ?>">Valor numero <?php echo $i; ?></option>
            <?php } ?>
        </select>
        
        
        <table>
            <tr>
                <td>
                    <select class="selects-varios">
                        <?php for($i=0; $i<20; $i++){ ?>
                        <option value="<?php echo $i; ?>">Selectores varios <?php echo $i; ?></option>
                        <?php } ?>
                    </select>
                </td>
                <td>
                    <select class="selects-varios" onchange="alert('select con onchange: '+this.value );">
                        <?php for($i=0; $i<20; $i++){ ?>
                        <option value="<?php echo $i; ?>">Selectores varios <?php echo $i; ?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>
        </table>
        
    </body>
</html>