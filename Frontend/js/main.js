/*menu*/
$(document).ready(function() {
    $('.mega-dropdown').hover(
        function() {
            $('.sub_menu').stop(true, true).slideDown('medium');
        },
        function() {
            $('.sub_menu').stop(true, true).slideUp('medium');
        }
    );
    /*book*/
    $('#pay_bank').click(function() {
        $(this).find('.fa-chevron-down').addClass('hidden');
        $(this).find('.fa-check').css('display', 'block');
        $(this).css({ "background-color": "#4CAF50", "color": "#fff" });
        $('#pament-method-bank').attr('checked', true);
        $('#pament-method-2').attr('checked', false);
        $('#metho_1').css('display', 'block');
        $('#pay_off').css({ "background-color": "#F3EDED", "color": "black" });
        $('#pay_off').find('.fa-chevron-down').removeClass('hidden');
        $('#pay_off').find('.fa-check').css('display', 'none');
        $('#metho_2').css('display', 'none');
        var radio_1 = $('#pament-method-bank').val();
        $('.btn-prev').attr('data-radio', radio_1);
    });
    $('#pay_off').click(function() {
        $('#metho_1').css('display', 'none');
        $('#pay_bank').css({ "background-color": "#F3EDED", "color": "black" });
        $('#pay_bank').find('.fa-chevron-down').removeClass('hidden');
        $('#pay_bank').find('.fa-check').css('display', 'none');
        $(this).find('.fa-chevron-down').addClass('hidden');
        $(this).find('.fa-check').css('display', 'block');
        $(this).css({ "background-color": "#4CAF50", "color": "#fff" });
        $('#metho_2').css('display', 'block');
        $('#pament-method-2').attr('checked', true);
        $('#pament-method-bank').attr('checked', false);
        var radio_2 = $('#pament-method-bank').val();
        $('.btn-prev').attr('data-radio', radio_2);
    });
    $('.btn-prev').click(function() {
        var adult = $('#adult').val();
        var chil = $('#child').val();
        var infant = $('#infant').val();
        var radio = $(this).attr('data-radio');
        if (adult == "") {
            toastr["error"]("Vui lòng chọn số người lớn?");
        } else if (radio == "1" || radio == "2") {
            $('.book_one').css('display', 'none');
            $('.book_tow').css('display', 'block');
            $('.btn_1').removeClass('active');
            $('.btn_2').addClass('active');
        } else {
            toastr["error"]("Vui lòng chọn phương thức thanh toán?");
        }
    })
    $('.btn-back').click(function() {
        $('.book_one').css('display', 'block');
        $('.book_tow').css('display', 'none');
        $('.btn_2').removeClass('active');
        $('.btn_1').addClass('active');
    });
    $('#adult').change(function() {
        var int_adult = parseInt($(this).val());
        var price_adult = parseInt($(this).attr('price-adult'));
        var int_child = parseInt($('#child').val());
        var int_infant = parseInt($('#infant').val());
        var price_child = parseInt($('#child').attr('price-chil'));
        var price_infant = parseInt($('#infant').attr('pirce-infant'));
        var total_chil = int_child * price_child;
        var total_infant = int_infant * price_infant;
        var total_adult = int_adult * price_adult;
        var total_price = total_chil + total_infant + total_adult;
        if (int_child == 0) {
            $('.change_book').html('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
        } else if (int_infant == 0) {
            $('.change_book').html('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
        } else {
            $('.change_book').html('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá trẻ em: ' + price_child + ' x ' + int_child + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá em bé: ' + price_infant + ' x ' + int_infant + '</p>');
        }
        $('.total_price').text(total_price);
    });
    $('#child').change(function() {
        var int_child = parseInt($(this).val());
        var price_child = parseInt($(this).attr('price-chil'));
        var int_adult = parseInt($('#adult').val());
        var price_adult = parseInt($('#adult').attr('price-adult'));
        var int_infant = parseInt($('#infant').val());
        var price_infant = parseInt($('#infant').attr('pirce-infant'));
        var total_chil = int_child * price_child;
        var total_infant = int_infant * price_infant;
        var total_adult = int_adult * price_adult;
        var total_price = total_chil + total_infant + total_adult;
        if (int_infant == 0) {
            $('.change_book').html('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá trẻ em: ' + price_child + ' x ' + int_child + '</p>');
        } else {
            $('.change_book').html('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá trẻ em: ' + price_child + ' x ' + int_child + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá em bé: ' + price_infant + ' x ' + int_infant + '</p>');
        }

        $('.total_price').text(total_price);
    });
    $('#infant').change(function() {
        var int_infant = parseInt($(this).val());
        var price_infant = parseInt($(this).attr('pirce-infant'));
        var int_adult = parseInt($('#adult').val());
        var price_adult = parseInt($('#adult').attr('price-adult'));
        var int_child = parseInt($('#child').val());
        var price_child = parseInt($('#child').attr('price-chil'));
        var total_chil = int_child * price_child;
        var total_infant = int_infant * price_infant;
        var total_adult = int_adult * price_adult;
        var total_price = total_chil + total_infant + total_adult;
        $('.change_book').html('<p style="font-weight: 600"> Giá em bé: ' + price_infant + ' x ' + int_infant + '</p>');
        if (int_child == 0) {
            $('.change_book').html('<p style="font-weight: 600"> Giá em bé: ' + price_infant + ' x ' + int_infant + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
        } else {
            $('.change_book').html('<p style="font-weight: 600"> Giá trẻ em: ' + price_child + ' x ' + int_child + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá em bé: ' + price_infant + ' x ' + int_infant + '</p>');
            $('.change_book').append('<p style="font-weight: 600"> Giá người lớn: ' + price_adult + ' x ' + int_adult + '</p>');
        }
        $('.total_price').text(total_price);
    });

});